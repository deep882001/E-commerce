import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'
import './skeletonProductDetailpage.scss'

export default class SkeletonProductDetailpage extends Component {
  render() {
    return (
      <div className="SkeletonProductDetailpage">
        <div>
          <Skeleton height={400} width={'90%'} />
        </div>
        <div className="SkeletonDetailpart">
          <div>
            <Skeleton height={50} />
          </div>
          <div>
            <Skeleton height={50} width={'35%'} />
          </div>
          <div>
            <span className="colorPart">
              <Skeleton count={1} height={50} width={'40%'} />
            </span>
            <Skeleton count={1} height={50} width={'40%'} />
          </div>
          <div>
            <Skeleton height={50} width={'35%'} />
          </div>
          <div>
            <Skeleton height={50} width={'60%'} />
          </div>
        </div>
      </div>
    )
  }
}
