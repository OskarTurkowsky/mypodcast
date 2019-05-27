import Link from 'next/link'
class PodcastList extends React.Component{
	render(){
		return (
			<div>
			{
			this.props.clips.map((clip) => {
				return (
					<Link href={`/podcast?id=${clip.id}`} prefetch key={clip.id}>
						<a className="podcast">
							<h3>{clip.title}</h3>
							<h3>{ Math.ceil(clip.duration / 60) } minutes</h3>
							<div className="meta">
										
							</div>
						</a>
					</Link>
						)
					})
			}
			<style jsx>{`
			        h1 {
			          font-weight: 600;
			          padding: 15px;
			        }

			        .podcast {
			          display: block;
			          text-decoration: none;
			          color: #333;
			          padding: 15px;
			          border-bottom: 1px solid rgba(0,0,0,0.2);
			          cursor: pointer;
			        }
			        .podcast:hover {
			          color: #000;
			        }
			        .podcast h3 {
			          margin: 0;
			        }
			        .podcast .meta {
			          color: #666;
			          margin-top: 0.5em;
			          font-size: 0.8em;
			        }
				`}</style>
			</div>
		)
	}
}
export default PodcastList