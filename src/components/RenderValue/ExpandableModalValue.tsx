import React, { useState } from 'react'
import ObjectViewer from '../ObjectViewer'
import { valueToString } from '.'
import CloseIcon from '~/icons/compiled/Close'

const ExpandableModalValue = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <span
        className="cursor-pointer text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => {
          setShowModal(true)
        }}
      >
        {valueToString(data.label)}
      </span>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-xl w-fit h-fit min-w-[200px] min-h-[150px] flex justify-center items-center"
            onClick={e => e.stopPropagation()}
          >
            <ObjectViewer data={data.onExpand} collapsible />
            <CloseIcon
              className="hover:bg-slate-200 rounded-full p-2 w-8 h-8 absolute top-1 right-1"
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ExpandableModalValue
