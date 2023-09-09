type PersonListProps = {
    names:{
        firstName:string,
        lastName:string
    }[]
}

const PersonList = (props:PersonListProps) => {
    return(
        <div>
            <ul>
            {
                props.names.map(
                    name=> <li key={name.firstName} > {name.firstName} {name.lastName}</li>
                    )
            }
            </ul>
        </div>

    )
}

export default PersonList;