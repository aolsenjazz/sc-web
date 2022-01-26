import Tutorial from './Tutorial';

import tutorial1 from '../assets/screen1.png';
import tutorial2 from '../assets/screen2.png';
import tutorial3 from '../assets/screen3.png';

const preTitle1 = 'For supported devices:';

const title1 = `Same devices, new possibilities`;
const title2 = 'Seamlessly integrate multiple devices';
const title3 = 'Support for all your devices';

const body1 =
  'Turn your MIDI pads into instrument selectors, sidechain sources, or program changes. Send any MIDI event with your knobs. Make your pitchbend control your effects. SuperController enables you reimagine the way your MIDI devices interact with whatever software you use.';
const body2 =
  'Connect as many devices as you want, even if they’re the same model. You can change their nickname, have them all share the same sustain pedal, and disambiguate them by changing their default MIDI channel.';
const body3 =
  'In order to use all of SuperController’s features, we build drivers for every device. If you have a device for which we haven’t yet been able to write drivers, you can still send custom messages to MIDI clients using the Forwarder.';

function Tutorials() {
  return (
    <div className="pb-md-5">
      <Tutorial
        imageSrc={tutorial1}
        backsplashColor="red"
        preTitle={preTitle1}
        title={title1}
        body={body1}
        mainSide="left"
      />
      <Tutorial
        imageSrc={tutorial2}
        backsplashColor="yellow"
        preTitle={undefined}
        title={title2}
        body={body2}
        mainSide="right"
      />
      <Tutorial
        imageSrc={tutorial3}
        backsplashColor="red"
        preTitle={undefined}
        title={title3}
        body={body3}
        mainSide="left"
      />
    </div>
  );
}

export default Tutorials;
