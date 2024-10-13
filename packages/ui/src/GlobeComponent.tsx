import { Globe } from 'aceternity-ui';
import globeData from './globe.json';


const GlobeComponent = () => (
  <div className="flex justify-center items-center h-screen">
    <Globe
      width={600} // Apni requirement ke hisaab se customize kar sakte ho
      height={400}
      data={globeData}
    />
  </div>
);

export default GlobeComponent;
