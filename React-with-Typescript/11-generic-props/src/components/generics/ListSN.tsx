type ListSNProps<T> = {
    items: T[]
    onClick: (value:T) => void
}

export const ListSN = <T extends string | number>({items, onClick}:ListSNProps<T>) => {
  return (
    <div>
        <h2>List of items</h2>
        {items.map((item,index) => {
            return (
                <div key={index} onClick={() => onClick(item)}>
                    {item}
                </div>
            )
        })}
    </div>
  )
}
