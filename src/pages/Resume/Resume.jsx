import React, { Component } from 'react';

import TitleSection from '@/TitleSection/TitleSection';


export default class Home extends Component {
  render() {
    return (
      <div className="resume">
        <TitleSection
          colspan={3}
        >
        标题
        </TitleSection>
      </div>
    );
  }
}
