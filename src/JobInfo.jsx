import Duties from "./Duties"

const JobInfo = ({ jobs , currentItem}) => {
    const {title, dates, duties, company} = jobs[currentItem]
   
    
  return (
    <div>
        <h3>{title}</h3>
        <span>{company}</span>
        <p>{dates}</p>
        <Duties duties={duties}/>
        </div>
  )
}
export default JobInfo