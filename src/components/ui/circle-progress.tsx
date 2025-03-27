import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {colors} from '../../layout/theme/colors'

function CircleProgress({width = 25, value = 0}: {width?: number; value: number}) {
  return (
    <div className='d-flex' style={{width: `${width}px`, height: `${width}px`}}>
      <CircularProgressbar
        value={value}
        text={''}
        strokeWidth={12}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          // Colors
          pathColor: `${colors.primary_500}`,
        })}
      />
    </div>
  )
}

export default CircleProgress
