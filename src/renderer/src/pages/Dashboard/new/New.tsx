import AdminLayout from '@renderer/layouts/AdminLayout'
import React from 'react'

import './new.css'

//imported icons
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

type input = {
  id: number
  label: string
  type: string
  placeholder: string
}

type Props = {
  inputs: input[]
  title: string
}

const New = ({ inputs, title }: Props): React.JSX.Element => {
  return (
    <AdminLayout>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="formDiv">
              <form action="" className="form grid">
                <div className="inputDiv">
                  <label>label</label>
                  <div className="input flex">
                    <BsFillShieldLockFill className="icon" />
                    <input type="text" id="password" placeholder="Enter Password" />
                  </div>
                </div>
                <div className="inputDiv">
                  <label>label</label>
                  <div className="input flex">
                    <BsFillShieldLockFill className="icon" />
                    <input type="text" id="password" placeholder="Enter Password" />
                  </div>
                </div>

                <div className="inputDiv">
                  <label>label</label>
                  <div className="input flex">
                    <BsFillShieldLockFill className="icon" />
                    <input type="text" id="password" placeholder="Enter Password" />
                  </div>
                </div>
                <div className="inputDiv">
                  <label>label</label>
                  <div className="input flex">
                    <BsFillShieldLockFill className="icon" />
                    <input type="text" id="password" placeholder="Enter Password" />
                  </div>
                </div>

                <button type="submit" className="btn flex">
                  <span>Login</span>
                  <AiOutlineSwapRight className="icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default New
