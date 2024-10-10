import { v4 as uuidv4 } from 'uuid';
const Duties = ({duties}) => {
  return (
    <div>
        {duties.map((duty, index) => {
            const id = uuidv4();
            console.log(id);
            
            return(
                <div key={id}>
                <p>{duty}</p>
                </div>
            )
        })}
    </div>
  )
}
export default Duties