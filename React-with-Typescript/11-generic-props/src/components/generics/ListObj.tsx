type ListObjProps<T> = {
    items: T[]
    onClick: (value:T) => void
}

export const ListObj = <T extends {id:number}>({items, onClick}:ListObjProps<T>) => {
  return (
    <div>
        <h2>List of items</h2>
        {items.map((item,index) => {
            return (
                <div key={item.id} onClick={() => onClick(item)}>
                    {item.id}
                </div>
            )
        })}
    </div>
  )
}
