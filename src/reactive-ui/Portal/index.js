import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Props from 'prop-types';

function Portal({children, containerId='portal-root'}){

    const portalRef=useRef(null);

    useEffect(()=>{

        let portalElement=document.getElementById(containerId);
        let systemGenerated=false;

        if(!portalElement){
            systemGenerated=true;
            portalElement=document.createElement('div');
            portalElement.id=containerId;
            document.body.appendChild(portalElement);
        }

        portalRef.current=portalElement;

        return ()=>{
            if(systemGenerated){
                document.body.removeChild(portalRef.current);
            }
        }

    },[containerId]);

    if(!portalRef.current)  return null;

    return ReactDOM.createPortal(children,portalRef.current);
}

Portal.propTypes = {
	children : Props.object,
	containerId: Props.string
}

export default Portal;