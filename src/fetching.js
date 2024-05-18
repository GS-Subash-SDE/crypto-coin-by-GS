export async function fetchData(setObject) {
   try {
     const responseBody = await fetch(
       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
     );
     if (!responseBody.ok) {
       throw new Error("Network response was not ok");
     }
     const data = await responseBody.json();
     
     setObject(data);
   } catch (error) {
     if (error.response && error.response.status === 429) {
       console.log("Rate limit exceeded. Waiting before retrying...");
       // Implement a backoff strategy, e.g., wait for 1 minute before retrying
       setTimeout(fetchData, 60000); // Wait for 1 minute (60000 milliseconds) before retrying
     } else {
       console.error("Error fetching data:", error.message);
       // Retry after 1 minute in case of any error
       setTimeout(fetchData, 60000); // Wait for 1 minute (60000 milliseconds) before retrying
     }
   }
}