import Collection from './Collection'
import Trendy from '../JSON/Trendy.json'
function Trend() {
  return (
  <>
      <Collection products={Trendy} />
  </>
  )
}

export default Trend
