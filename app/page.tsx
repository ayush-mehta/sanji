import Link from "next/link";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home(): JSX.Element {
	return (
		<main>
			<Navbar />
			<div>
				<h1 className="text-5xl font-bold text-black">Lets&apos;s Innovate, Collaborate and Preserve</h1>
			</div>
			<div>
				<h3 className="text-2xl text-black">Aarogya Sanskriti (Healthcare- Culture) The world&apos;s first Global Research Consortium.</h3>
			</div>
			<div>
				<label className="input input-bordered flex items-center gap-2">
					<input type="text" className="grow" placeholder="email address" />
					<Link href="/register" className="btn btn-primary">
						Register
					</Link>
				</label>
			</div>
			<div>
				<Image src="/chemicalStructure.svg" alt="careu" width={120} height={100} />
			</div>
			<div>
				<Image src="/medicines.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<Image src="/virus1.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<Image src="/virus2.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<Image src="/virus3.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<Image src="/testtubes.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<h3 className="text-2xl text-black">Trusted by leading researchers in AMR industry</h3>
			</div>
			<div>
				<Image src="/backgroundElement1.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<Image src="/collaboration.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<h3 className="text-3xl font-bold text-black">Collaboration</h3>
			</div>
			<div>
				<h1 className="text-5xl font-bold text-black">Collaborate on Innovative Research</h1>
			</div>
			<div>
				<h3 className="text-2xl text-black">
					We unite researchers, students, government officials, and industry leaders on a single platform to pool resources and expertise, driving cutting-edge research to understand and
					combat AMR.
				</h3>
			</div>
			<div>
				<Image src="/backgroundElement2.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<h1 className="text-5xl font-bold text-black">Enhance AMR Surveillance</h1>
			</div>
			<div>
				<h3 className="text-2xl text-black">
					Through systematic surveillance, we effectively monitor and respond to AMR trends, ensuring timely interventions, and introduce our dynamic heat map to navigate global AMR research
					resources and statistics across various fields.
				</h3>
			</div>
			<div>
				<Image src="/backgroundElement1.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<Image src="/lock.svg" alt="careu" width={120} height={100}></Image>
			</div>
			<div>
				<h3 className="text-3xl font-bold text-black">Application Security</h3>
			</div>
			<div>
				<h1 className="text-5xl font-bold text-black">Open Publishing Platform</h1>
			</div>
			<div>
				<h3 className="text-2xl text-black">
					Our open publishing platform, with no fees required, allows you to publish and have your work reviewed by renowned researchers and peers, fostering connections between students and
					professionals in research, global health policy, and the pharmaceutical industry for a vibrant exchange of ideas and knowledge.
				</h3>
			</div>
		</main>
	);
}
