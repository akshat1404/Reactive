import React from 'react'

function Scrollspy({sections, titles}) {

    const [activeSection, setActiveSection] = React.useState(sections[0]?.id);

    return (
        <>
            <div style={{position:'sticky',top:0,left:0,display:'flex',background:'white'}} >
                {
                    titles?.map((title, index) => (
                        <div onClick={()=>{
                            const section = document.getElementById(sections[index].id);
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                                setActiveSection(sections[index].id);
                            }
                        }} key={index} style={{padding:'10px', borderBottom:'1px solid #ccc',cursor:'pointer',textDecoration: activeSection === sections[index].id ? 'underline' : 'none'}}>
                            {title}
                        </div>
                    ))
                }
            </div>
            {
                sections?.map((section, index) => (
                    <div key={index} id={section.id} style={{padding:'20px', marginTop:'10px', border:'1px solid #ccc'}}>
                        <h2>{section.title}</h2>
                        {section.content}
                    </div>
                ))
            }
        </>
    )
}

export default Scrollspy