type StatusProps = {
    status:"loading" | "success" | "error"
}

export default function Status(props:StatusProps) {
    return (
        <div>
            Status: {props.status}
        </div>
    )
  }
  