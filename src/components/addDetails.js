export default function Details({ postOff }) {
  const { Name, BranchType, DeliveryStatus, District, Division } = postOff || {};
  return (
    <div className="details">
      <p>
        <strong>Name:</strong> {Name}
      </p>
      <p>
        <strong>Branch Type:</strong> {BranchType}
      </p>
      <p>
        <strong>Delivery Status:</strong> {DeliveryStatus}
      </p>
      <p>
        <strong>District:</strong> {District}
      </p>
      <p>
        <strong>Division:</strong> {Division}
      </p>
    </div>
  );
}
