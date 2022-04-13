import React from 'react'

export default function NoDataFound() {
  return (
    <div className="container-nodata">
          <lord-icon
            src="https://cdn.lordicon.com/dnoiydox.json"
            trigger="loop"
            colors="primary:#595959,secondary:#84b74d"
            style={{
              margin: '0 10px',
              width: '400px',
              height: '400px',
            }}
          ></lord-icon>
          <div className="text-data">
            <h2>Sorry, we can't find any meal!</h2>
          </div>
    </div>
  )
}
