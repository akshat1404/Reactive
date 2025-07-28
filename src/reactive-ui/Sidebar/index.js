import React from 'react'

function Sidebar({items}) {
    
    const [expanded, setExpanded] = React.useState(true);

    const getIcon = (title) => {
        return `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(title)}`;
    };


    return (
        <>
            {
                expanded && (
                    <div className="sidebar">
                        {
                            items.map((item, index) => (
                                <div onClick={()=>item.click()} key={index} className="sidebar-item">
                                    <img style={{height:'20px',width:'20px'}} src={item.icon || getIcon(item.title)} alt={item.title} className="sidebar-icon" />
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default Sidebar