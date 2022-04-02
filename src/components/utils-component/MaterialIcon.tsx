function MaterialIcon(props: any) {
  console.log(props);
  return (
    <span
      onClick={props.onClick}
      style={{ fontSize: "20px" + props.style }}
      className={
        "material-icons-outlined ant-menu-item-icon " + props.className
      }
    >
      {props.type}
    </span>
  );
}

export default MaterialIcon;
