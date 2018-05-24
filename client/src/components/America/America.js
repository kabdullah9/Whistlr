import React from "react";
import { Modal, Button } from "react-bootstrap";

const America ({children}) => (props) (
    <div
        style={{/* On mouse hover, lighten state color */
            path:hover {
                fill-opacity: .7;
            }
            
            /* Style for Custom Tooltip */
            div.tooltip {   
                 position: absolute;           
                text-align: center;           
                width: 60px;                  
                height: 28px;                 
                padding: 2px;             
                font: 12px sans-serif;        
                background: white;   
                border: 0px;      
                border-radius: 8px;           
                pointer-events: none;         
            }
                    
            /* Legend Font Style */
            body {
                font: 11px sans-serif;
            }
                    
            /* Legend Position Style */
            .legend {
                position:absolute;
                left:800px;
                top:350px;
            }}}
        className="america"
    >
    {children}
    </div>
);