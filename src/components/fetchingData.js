export default async function fetchingData(pinCode) {
  if (!pinCode) {
    return;
}
  try {

    const res = await fetch(
      `https://api.postalpincode.in/pincode/${pinCode}`
    );
    // console.log(res);
    if (!res.ok) {
      return new Error('Netword error!');
    }
    
    const data = await res.json();
    
    const realData = data[0]
    
    if (realData.Status !== "Success") {
      return new Error("Wrong Input");
    }
    
    // console.log(realData);

    return { status: true, data: realData };
  
  } catch (err) {
    alert(err.message);
    return { status: false };
  }
}