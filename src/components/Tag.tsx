export const Tag = ({ children }) => {
  return <span style={{
    backgroundColor:"#060a31",
    borderRadius:20,
    padding:3,
    paddingLeft:6,
    paddingRight:6,
    fontSize:12,
    color:"#ffffff",
    userSelect:"none"
  }}>{children}</span>;
};