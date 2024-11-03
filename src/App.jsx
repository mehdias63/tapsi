import Button from './components/button'
import FeatureItem from './components/featureItem'
import { useState } from 'react'
function App() {
	const [mobileOpen, setMobileOpen] = useState(false)
	return (
		<div className="max-w-[90rem] mx-auto">
			<header className="relative flex justify-between items-center py-2 px-4 lg:px-10 bg-white max-h-[3.75rem]">
				<h1 className="text-h3 text-gray lg:text-dark-gray">تپسی</h1>
				{mobileOpen && (
					<div className="fixed inset-0 z-10 bg-dark opacity-50 lg:hidden"></div>
				)}
				<div
					className={`relative z-30 ml-2 block ${
						mobileOpen ? 'open' : ''
					}`}
					onClick={() =>
						setMobileOpen(preMobileOpen => !preMobileOpen)
					}
				>
					{mobileOpen ? (
						<img
							src="/src/assets/images/icon-menu-close.svg"
							alt="Open"
							className="lg:hidden h-5"
						/>
					) : (
						<img
							src="/src/assets/images/icon-menu.svg"
							alt="Close"
							className="lg:hidden h-5 bg-black"
						/>
					)}
				</div>
				<nav
					className={`fixed left-0 top-0 z-20 h-full w-2/3 pl-6 pt-[9rem] bg-white lg:relative lg:pt-0 lg:w-full lg:mr-20 
            text-gray gap-6 ${
							mobileOpen
								? 'block'
								: 'hidden lg:flex justify-center items-center w-full'
						}`}
				>
					<ul className="flex flex-col items-center gap-6 lg:flex-row leading-6 w-full lg:gap-10">
						<li>
							<a className="hover:text-orange" href="#">
								وبلاگ
							</a>
						</li>
						<li>
							<a className="hover:text-orange" href="#">
								فرصت های شغلی
							</a>
						</li>
						<li>
							<a className="hover:text-orange" href="#">
								خدمات کسب و کارها
							</a>
						</li>
						<li>
							<a className="hover:text-orange" href="#">
								پشتیبانی
							</a>
						</li>
					</ul>
					<Button
						text="دانلود تپسی"
						className="py-1 px-8 w-full mr-4 mt-20 lg:mt-0 lg:max-w-[10rem]"
					/>
				</nav>
			</header>
			<section className="grid *:col-start-1 *:row-start-1 mt-4">
				<div className="w-full h-[50.8125]">
					<img
						src="/src/assets/images/banner.png"
						alt="banner"
						className="w-full object-cover h-[30.8125rem]"
					/>
				</div>
				<div className="max-w-[16.875rem] md:max-w-[33rem] h-[26.3125] lg:h-[21.625rem] rounded-lg p-6 mx-auto my-14 lg:mr-24 lg:mt-16 bg-gradient-to-r from-[#171a3cb3] to-[#171a3c4d] text-white">
					<h2 className="text-h3 md:text-h1 mb-2">تپسی</h2>
					<p className="text-h6 md:text-h4 mb-6 md:mt-4">
						اپلیکیشن درخواست خودرو و پیک
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2">
						<Button text="دانلود اپلیکیشن مسافران" />
						<Button text="وب اپلیکیشن مسافران" />
						<Button text="دانلود اپلیکیشن رانندگان" />
						<Button text="ثبت نام رانندگان" />
					</div>
				</div>
				<div className="w-[35rem] mr-auto ml-20 mt-40 hidden lg:block">
					<img src="/src/assets/images/mockup.png" />
				</div>
			</section>
			<section>
				<h2 className="text-h5 md:text-h2">سرویس‌های تپسی</h2>
				<div className="flex justify-between overflow-auto pt-5">
					<div className="services">
						<img
							src="/src/assets/images/cc-classic.png"
							alt="tapsi-classic-icon"
							className="max-w-[7rem]"
						/>
						<p className="mt-3 text-body">تپسی کلاسیک</p>
					</div>
					<div className="services">
						<img
							src="/src/assets/images/cc-tel.png"
							alt="tapsi-classic-icon"
							className="max-w-[7rem]"
						/>
						<p className="mt-3 text-body">تپسی تلفنی</p>
					</div>
					<div className="services">
						<img
							src="/src/assets/images/cc-line.png"
							alt="tapsi-classic-icon"
							className="max-w-[7rem]"
						/>
						<p className="mt-3 text-body">تپسی لاین</p>
					</div>
					<div className="services">
						<img
							src="/src/assets/images/cc-motopeyk.png"
							alt="tapsi-classic-icon"
							className="max-w-[7rem]"
						/>
						<p className="mt-3 text-body">موتوپیک</p>
					</div>
					<div className="services">
						<img
							src="/src/assets/images/cc-autopeyk.png"
							alt="tapsi-classic-icon"
							className="max-w-[7rem]"
						/>
						<p className="mt-3 text-body">اتوپیک</p>
					</div>
					<div className="services">
						<img
							src="/src/assets/images/cc-plus.png"
							alt="tapsi-classic-icon"
							className="max-w-[7rem]"
						/>
						<p className="mt-3 text-body">تپسی پلاس</p>
					</div>
				</div>
			</section>
			<div>
				<FeatureItem
					title="تپسی کلاسیک"
					text="با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید."
					image="/src/assets/images/illus-classic.png"
					imageClassName="hidden md:flex"
				/>
				<FeatureItem
					title="تپسی تلفنی"
					text="سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست."
					image="/src/assets/images/illus-tel.png"
					imageClassName="hidden md:flex"
				/>
				<FeatureItem
					title="تپسی لاین"
					text="تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود."
					image="/src/assets/images/illus-line.png"
					imageClassName="hidden md:flex"
				/>
				<FeatureItem
					title="موتوپیک"
					text="با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید."
					image="/src/assets/images/illus-motopeyk.png"
					imageClassName="hidden md:flex"
				/>
				<FeatureItem
					title="اتوپیک"
					text="اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است."
					image="/src/assets/images/illus-autopeyk.png"
					imageClassName="hidden md:flex"
				/>
				<FeatureItem
					title="تپسی پلاس"
					text="در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد."
					image="/src/assets/images/ilussplus.png"
					imageClassName="hidden md:flex"
				/>
			</div>
			<section>
				<FeatureItem
					title="خدمات تپسی ویژه کسب‌وکارها"
					text="پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید."
					image="/src/assets/images/imac.png"
					isNewProduct={true}
					textButton="ورود و ثبت نام پنل سازمانی"
				/>
				<FeatureItem
					title="خرید کد اعتبار تپسی"
					text="کد اعتبار تپسی امکان استفاده از تخفیف در سفر با تپسی به میزان اعتبار خریداری شده را برای کاربران، کسب و کارها و سازمان ها فراهم می کند. تنها با صرف چند دقیقه می توانید این کد را تهیه کنید و آن را در اختیار کارکنان و مشتریانتان بگذارید."
					image="/src/assets/images/macbook.png"
					isNewProduct={true}
					textButton="خرید کد اعتبار و تخفیف"
					className="lg:flex-row-reverse"
				/>
			</section>
		</div>
	)
}
export default App
