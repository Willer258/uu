function MaterialIcon(props: any) {
  return (
    <span
      onClick={props.onClick}
      style={{ fontSize: "30px" + props.style }}
      className={"material-icons-outlined m-1 text-xl " + props.className}
    >
      {props.type}
    </span>
  );
}

export default MaterialIcon;
