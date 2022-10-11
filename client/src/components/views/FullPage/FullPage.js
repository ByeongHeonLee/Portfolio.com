import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import { Icon, Button } from 'antd';
import './FullPage.css'
import man_img from '../../../images/character.png'
import searchbar_img from '../../../images/search_bar.png'

export default class fullPage extends React.Component {
  render() {
    return (
        <div className='full-page'>
          <FullPage controls controlsProps={{className: 'slide-navigation'}}>
              <Slide>
              <div className="section-common section-area1">
                <h1>Portfolio.com</h1>
                <img src={man_img} className='man_img'></img>
              </div>
              </Slide>
              <Slide>
              <div className="section-common section-area2">
                <div className='search_bar'>
                  <h1>삼성전자</h1>
                </div>
                <Button type="primary" size="large" href="/search" 
                  style={{ border: '1px solid rgb(0, 88, 202)', backgroundColor:'rgb(0, 88, 202)', color: 'white', top: '75%', left: '70%',
                  borderRadius: '20px', padding: '8px', height:'60px', width: '200px', fontSize: '20px', fontWeight: 'bolder' }}>
                    종목 검색하기</Button>
              </div>
              </Slide>
              <Slide>
              <div className="section-common section-area3">
                <Button type="primary" size="large" href="/index" 
                  style={{ border: '1px solid rgb(0, 88, 202)', backgroundColor:'rgb(0, 88, 202)', color: 'white', top: '75%', left: '70%',
                  borderRadius: '20px', padding: '8px', height:'60px', width: '200px', fontSize: '20px', fontWeight: 'bolder' }}>
                    지수 확인하기</Button>
              </div>
              </Slide>
              <Slide>
              <div className="section-common section-area4">
                4
              </div>
              </Slide>
              <Slide>
              <div className="section-common section-area5">
                5
              </div>
              </Slide>
          </FullPage>
        </div>
    );
  }
};
