import { Link } from '../routes'
import slug from '../helpers/slug'
import HomeLayout from '../components/HomeLayout'
class ChannelList extends React.Component{

	render(){
		const { channels } = this.props
		return (
			<div>
				<div className="channels">
				{
					channels.map((item) =>(
						<Link route="channel" params={ {slug: slug(item.title), id: item.id} } prefetch>
							<a className="channel" key={item.id}>
								<img src={item.urls.logo_image.original}/>
								<h2>{item.title}</h2>
							</a>
						</Link>
					))
				}
				</div>
				<style jsx>{`
				        .channels {
				          display: grid;
				          grid-gap: 15px;
				          padding: 15px;
				          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
				        }
				        a.channel {
				          display: block;
				          margin-bottom: 0.5em;
				          color: #fff;
				          text-decoration: none;
				        }
				        .channel img {
				          border-radius: 3px;
				          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
				          width: 100%;
				        }
					`}
				</style>
			</div>
		)
	}
}
export default ChannelList