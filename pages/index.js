import 'isomorphic-fetch'
import Link from 'next/link'
import Error from 'next/error'
import HomeLayout from '../components/HomeLayout'
import ChannelList from '../components/ChannelList'
class indexLayout extends React.Component{
	static async getInitialProps({res}){
		try{
			let req = await fetch('https://api.audioboom.com/channels/recommended')
	    	let { body: channels } = await req.json();
	    	return { channels,statusCode: 200 }	
		} catch(e){
			res.statusCode = 503
			return { channels: null, statusCode: 503}
		}
	}
	render(){
		const { channels,statusCode } = this.props
		if(statusCode != 200){
			return <Error statusCode={ statusCode }/>
		}
		return (
			<HomeLayout title="My Podcasts">
				<ChannelList channels={channels} />
			</HomeLayout>
		)
	}
}
export default indexLayout