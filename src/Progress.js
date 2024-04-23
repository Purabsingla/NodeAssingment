import { Container } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
export function Prog (){
    var i=0
    return (
        <div>
            <ProgressBar now={30} />
            <ProgressBar striped variant="success" now={40} />
            <ProgressBar striped animated variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} />
            {
                setInterval(function (i) {<ProgressBar striped animated variant="info" now={i+1} />},1000)
            }
        </div>
        
    );
}