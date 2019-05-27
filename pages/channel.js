import Link from 'next/link'
import 'isomorphic-fetch'
import HomeLayout from '../components/HomeLayout'
import ChannelList from '../components/ChannelList'
import Banner from '../components/Banner'
//import PodcastList from '../components/PodcastList'
import PodcastListClick from '../components/PodcastListClick'
import Error from './_error'
class Channel extends React.Component{
	static async getInitialProps({query,res}){
		let idChannel = query.id
		try{
			let [reqChannel, reqSeries, reqAudios] = await Promise.all([
		      fetch(`https://api.audioboom.com/channels/${idChannel}`),
		      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
		      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
		    ])
		    if(reqChannel.status >= 400){
		    	res.statusCode = reqChannel.status
		    	return {channel: null, audioClips: null, series: null, statusCode: reqChannel.status }
		    }
		    let dataChannel = await reqChannel.json()
		    let channel = dataChannel.body.channel

		    let dataAudios = await reqAudios.json()
		    let audioClips = dataAudios.body.audio_clips

		    let dataSeries = await reqSeries.json()
		    let series = dataSeries.body.channels

		    return { channel, audioClips, series, statusCode: 200 }	
		} catch(e){
			res.statusCode = 503
			return {channel: null, audioClips: null, series: null, statusCode: 503}
		}
	}
	render(){
		const{
			channel,
			audioClips,
			series,
			statusCode
		}=this.props;
		if(statusCode != 200){
			return <Error statusCode={ statusCode }/>
		}
		return (
			<HomeLayout title={channel.title}>
				<Banner backgroundImage={channel.urls.banner_image.original}/>
				{
					series.length > 0 &&
					<div>
						<h2>Escucha las ultimas series aquí</h2>
						<ChannelList channels={series}/>
					</div>
				}
				<h2>Escucha los ultimos podcasts aquí</h2>
				<PodcastListClick clips={ audioClips } onClickPodcast={this.openPodcast}/>
			</HomeLayout>
			
		)
	}
}
export default Channel