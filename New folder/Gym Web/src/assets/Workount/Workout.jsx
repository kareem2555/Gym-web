import SectionWrapper from "../Generator/SectionWrapper";
import ExerciseCard from "./ExerciseCard";
export default function Workout(props) {
  const { workout } = props
  return (
      <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER ', 'zone']} description={''}>
          <div className='flex flex-col gap-4 p-4'>
            {workout.map((exercise, i) => {
                return (
                    <ExerciseCard i={i} exercise={exercise} key={i} />
                )
            })}
          </div>
      </SectionWrapper>
  )
    
}