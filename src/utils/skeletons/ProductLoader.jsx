import React from 'react'
import ContentLoader from 'react-content-loader'

const ProductLoader = props => {
  return (
    <ContentLoader viewBox="0 0 1280 570" width={1280} height={570} {...props}>
      <rect x="0" y="0" rx="5" ry="5" width="180" height="30" />
      <rect x="110" y="50" rx="5" ry="5" width="700" height="520" />
      <rect x="0" y="50" rx="5" ry="5" width="100" height="100" />
      <rect x="0" y="160" rx="5" ry="5" width="100" height="100" />
      <rect x="0" y="270" rx="5" ry="5" width="100" height="100" />
      <rect x="0" y="380" rx="5" ry="5" width="100" height="100" />
      <rect x="0" y="490" rx="5" ry="5" width="100" height="100" />
      <rect x="860" y="50" rx="5" ry="5" width="120" height="28" />
      <rect x="860" y="90" rx="5" ry="5" width="315" height="35" />
      <rect x="860" y="140" rx="5" ry="5" width="160" height="30" />
      <rect x="860" y="210" rx="10" ry="10" width="195" height="20" />
      <rect x="860" y="270" rx="5" ry="5" width="380" height="40" />
      <rect x="860" y="330" rx="5" ry="5" width="140" height="40" />
      <rect x="860" y="380" rx="5" ry="5" width="270" height="45" />
      <rect x="1140" y="380" rx="5" ry="5" width="100" height="45" />
    </ContentLoader>
  )
}

export default ProductLoader