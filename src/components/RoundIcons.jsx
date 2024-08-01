const RoundIcon = ({ icon, color }) => {
  return (
    <div className="round-icon" style={{ backgroundColor: color }}>
      <i className={icon} />
    </div>
  );
}