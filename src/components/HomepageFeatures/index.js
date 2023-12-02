import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Heading from '@theme/Heading';

const FeatureList = [
  {
    title: 'Flexible and Scalable',
    image: {src: '/img/idx_flexible_scalable.png', alt: 'Components scaling all ways logo'},
    description: (
      <>
        <b>openUCS</b> components are designed from the ground up to be flexible and adaptable, allowing 
        operators to introduce new services and monetize their investments. 
        It can be scaled vertically and/or horizontally to meet the needs of service provider.
      </>
    ),
  },
  {
    title: 'Interoperable',
    image: {src: '/img/idx_interoperable.png', alt: 'Components scaling all ways logo'},
    description: (
      <>
        Adhering to established open standards and specifications, <b>openUCS</b> components ensures 
        seamless integration and interoperability with diverse networks and compatibility with both 
        legacy and future technologies.
      </>
    ),
  },
  {
    title: 'Innovation and collaboration',
    image: {src: '/img/idx_innovation.png', alt: 'Components scaling all ways logo'},
    description: (
      <>
        Open collaboration will foster cutting-edge advancements by enabling 
        seamless extension and customization of components. This collaborative 
        approach will ensure that <b>openUCS</b> components remain at the forefront of innovation.        
      </>
    ),
  },
];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img {...image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
