import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './skeletonLoddingpage.scss'

class SkeletonLodingpage extends React.Component {
  state = {
    skeleton: 20
  }
  render() {
    let number = []
    for (let i = 1; i <= this.state.skeleton; i++) {
      number.push(i)
    }
    return (
      <div>
        <ul className="SkeletonLodding">
          {number.map(() => {
            return (
              <li key={Math.random()}>
                <Skeleton circle={true} height={100} width={100} />
                <Skeleton count={3} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default SkeletonLodingpage
