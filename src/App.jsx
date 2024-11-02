import Button from './components/button'
function App() {
	return (
		<div>
			<header className="flex justify-between items-center py-2 px-10 bg-white max-h-[3.75rem]">
				<h1 className="">تپسی</h1>
				<section className="hidden lg:flex justify-center items-center p-4">
					<nav>
						<ul className="flex flex-col md:flex-row items-center gap-6 lg:flex-row leading-6 md:gap-10 mt-4 lg:ml-14">
							<li>
								<a className="" href="#">
									وبلاگ
								</a>
							</li>
							<li>
								<a className="" href="#">
									فرصت های شغلی
								</a>
							</li>
							<li>
								<a className="" href="#">
									خدمات کسب و کارها
								</a>
							</li>
							<li>
								<a className="" href="#">
									پشتیبانی
								</a>
							</li>
						</ul>
					</nav>
					<Button text="دانلود تپسی" className="" />
				</section>
			</header>
			<section className="grid *:col-start-1 *:row-start-1">
				<div className="w-full h-[50.8125]">
					<img
						src="/src/assets/images/banner.png"
						alt="banner"
						className="w-full object-cover h-[30.8125rem]"
					/>
				</div>
				<div className="max-w-[16.875rem] lg:max-w-[33rem] h-[26.3125] lg:h-[21.625rem] rounded-lg p-6 mx-auto my-14 lg:mr-24 lg:mt-16 bg-gradient-to-r from-[#171A3c] text-white">
					<h2>تپسی</h2>
					<p>اپلیکیشن درخواست خودرو و پیک</p>
					<div className="grid grid-cols-1 md:grid-cols-2">
						<Button text="دانلود اپلیکیشن مسافران" />
						<Button text="وب اپلیکیشن مسافران" />
						<Button text="دانلود اپلیکیشن رانندگان" />
						<Button text="ثبت نام رانندگان" />
					</div>
				</div>
			</section>
		</div>
	)
}
export default App
