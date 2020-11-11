import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { FaGooglePlay } from "react-icons/fa";

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Our App Library',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Refereeing & Score Tracking
                  </div>
                <h3 className="mt-0 mb-12">
                  DodgeRef
                  </h3>
                <p className="mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                <ButtonGroup>
                  <Button tag="a" color="dark" href="https://play.google.com/store/apps/details?id=com.dodgeref.flutterapp" target="_blank">
                    <FaGooglePlay style={{marginRight: '12px'}} />Google Play
                  </Button>
                </ButtonGroup>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dodgeref-01.png')}
                  alt="DodgeRef 01"
                  width={264}
                  height={396} />
                <Image
                  src={require('./../../assets/images/dodgeref-02.png')}
                  alt="DodgeRef 02"
                  width={264}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Sideline Manager
                  </div>
                <h3 className="mt-0 mb-12">
                  DodgeCap
                  </h3>
                <p className="m-0 mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                <ButtonGroup>
                  <Button tag="a" color="dark" href="https://play.google.com/store/apps/details?id=com.track.coachtracker" target="_blank">
                    <FaGooglePlay style={{marginRight: '12px'}} />Google Play
                  </Button>
                </ButtonGroup>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dodgecap-01.png')}
                  alt="DodgeCap 01"
                  width={264}
                  height={396} />
                <Image
                  src={require('./../../assets/images/dodgecap-02.png')}
                  alt="DodgeCap 02"
                  width={264}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Stretches, Games & Drills
                  </div>
                <h3 className="mt-0 mb-12">
                  DodgeCoach
                  </h3>
                <p className="m-0 mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                <ButtonGroup>
                  <Button tag="a" color="dark" href="https://play.google.com/store/apps/details?id=com.track.dodgecoach2" target="_blank">
                    <FaGooglePlay style={{marginRight: '12px'}} />Google Play
                  </Button>
                </ButtonGroup>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dodgecoach-01.png')}
                  alt="DodgeCoach 01"
                  width={264}
                  height={396} />
                <Image
                  src={require('./../../assets/images/dodgecoach-02.png')}
                  alt="DodgeCoach 02"
                  width={264}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
