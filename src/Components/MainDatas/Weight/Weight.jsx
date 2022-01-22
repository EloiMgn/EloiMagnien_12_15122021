import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import  useFetch  from '../../../utils/utils';
import './Weight.scss';



/**
 * Return react component barChart based on user's weight
 * @param { object } userActivity 
 * @returns { JSX.Element } 
 */
const Weight = ({id}) => {

  /**
 * Return react component Tooltip if selection is active
 * @param { object } payload 
 * @param { boolean } active 
 * @returns {HTMLElement} 
 */
// eslint-disable-next-line react/no-unstable-nested-components
const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="poid">{`${payload[0].value}kg`}</p>
        <p className="calories">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  payload: PropTypes.oneOfType([PropTypes.array,]),
  active: PropTypes.bool,
};
  const { data } = useFetch(`/user/${id}/activity`);
  const userActivity = [];

    /**
   * Function that change day index to the index of the day itself
   * @returns { void }
   */
  const modifyDay = () => {
    if(data.data){
      data.data.sessions.forEach(element => {
        userActivity.push({
          day: `${element.day.split('-')[2].split('')[1]}`, 
          kilogram: element.kilogram, 
          calories: element.calories
        });
      });
    }
  };
  modifyDay();
if(id) {

  return (
      <div className='weightChart'>
        <h3 className='weightChart__title'>Activité quotidienne</h3>
        {/* <ResponsiveContainer width='100%' height='100%'> */}
        <BarChart
            width={650}
            height={330}
            data={userActivity}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="day" stroke="#9B9EAC" />
          {/* <YAxis dataKey="kilogram" yAxisId="right" orientation="right" stroke="#9B9EAC" type="roboto"  axisLine={false}/> */}
          <YAxis stroke="#FBFBFB" hide='true' tickLine={false} axisLine={false}/>
          <Tooltip content={<CustomTooltip />}/>
          <Legend iconType='circle' verticalAlign='top' iconSize={8} type="roboto" height={30}/>
          <Bar className="bar" dataKey="kilogram" radius={[3, 3, 0, 0]} fill="#282D30" barSize={7} name='Poids (kg)'/>
          <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} name='Calories brûlées (Kcal)' barSize={7} maxBarSize={100}/>
        </BarChart>
        {/* </ResponsiveContainer> */}
      </div>
      
    );
  } return null;
};

Weight.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Weight;






