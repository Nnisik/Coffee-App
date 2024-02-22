export default function CuteSubheader(props) {
    return (
        <h3 class={"subheader " + props.subclass}>{props.text}</h3>
    );
}