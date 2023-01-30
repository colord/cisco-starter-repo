const Exhibit = ({ children, title }) => {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      {children}
    </div>
  )
};

export default Exhibit