type PersonProps = {
    name:{
        firstName:string
        lastName:string
    }
}

const Person = (props:PersonProps) => {
    return(
        <div>
            <h2>
                Hello {props.name.firstName} {props.name.lastName} Zindabad!
            </h2>
        </div>

    )
}

export default Person;