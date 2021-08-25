import * as React from "react";
import * as ReactDOM from "react-dom";
import Slider from "react-slick";

interface AppState {

    activeTabIndex: number;
    tabs: Tab[];
    currentSlide: number;

}

interface Tab {

    name: string,
    content: Content[]

}

interface Content {

    name: string;
    img: string;

}

export class App extends React.Component<any, AppState> {

    private numberOfSlidesToShow = 4;
    private $carousel: any;
    private slickSettings = {

        slidesToScroll: 1,
        slidesToShow: 4,
        infinite: false,
        speed: 600,
        //autoplaySpeed: 4000,
        //autoplay: true,
        arrows: false,
        //adaptiveHeight: true,
        //afterChange: () => this.setState(state => ({ updateCount: state.updateCount + 1 })),
        beforeChange: (current, next) => this.setState({ ...this.state, currentSlide: next })

    }
    private slider: any;

    private getActiveTab(): Tab {

        var { activeTabIndex, tabs } = this.state;
        return tabs[activeTabIndex];

    }

    private getNumberOfSlides() {

        return Math.ceil(this.getActiveTab().content.length / 2);

    }

    public constructor(props, content) {

        super(props, content);
        this.state = {

            activeTabIndex: 0,
            tabs: [

                {

                    name: "Maritime design & consultancy",
                    content: [

                        { name: "Vessel design", img: "https://www.bmt.org/media/3957/e5446-cutaway-render_07_feb_2020-004.jpg?center=0.51677852348993292,0.38490566037735852&mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Ballast water management", img: "https://www.bmt.org/media/3823/ballast-water-generic-image-smaller.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Claims & casualty investigation", img: "https://www.bmt.org/media/3728/shutterstock_443883559_shiprepair_2.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Cargo consultancy", img: "https://www.bmt.org/media/1116/shutterstock_1287733.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Engineering", img: "https://www.bmt.org/media/3894/structural-engineering.png?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Expert witness", img: "https://www.bmt.org/media/1113/bmt-surveys-image-3.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Material specifications", img: "https://www.bmt.org/media/4551/materials-engineering-and-testing-banner.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Ship surveys", img: "https://www.bmt.org/media/1128/audit-inspection-and-certification.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Test 1", img: "https://www.bmt.org/media/1128/audit-inspection-and-certification.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Test 2", img: "https://www.bmt.org/media/1128/audit-inspection-and-certification.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" }

                    ]

                },
                {

                    name: "Asset monitoring  & optimisation",
                    content: [

                        { name: "Automation & robotics", img: "https://www.bmt.org/media/1985/img_0615.png?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Data acquisition & analytics", img: "https://www.bmt.org/media/2483/istock-905106562.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Design audits", img: "https://www.bmt.org/media/1929/dscf2006.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Discrete event simulation", img: "https://www.bmt.org/media/3596/woman_computer.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Predictive maintenance", img: "https://www.bmt.org/media/4278/shutterstock_1515878162.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Position/navigation systems", img: "https://www.bmt.org/media/1153/bmt-rembrandt.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Structural integrity", img: "https://www.bmt.org/media/3644/structure2.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Environmental modelling", img: "https://www.bmt.org/media/1051/p1150125-colour-adjusted.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Life cycle services", img: "https://www.bmt.org/media/3608/boat_cycle.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" },
                        { name: "Welding centre of excellence", img: "https://www.bmt.org/media/4555/welding-engineering-and-technology-banner.jpg?mode=crop&width=526&height=340&rnd=131829666130000000" }

                    ]

                },
                {

                    name: "Environment & climate",
                    content: []

                },
                {

                    name: "Defence",
                    content: []

                },
                {

                    name: "Government support & security",
                    content: []

                }

            ],
            currentSlide: 0

        }

    }

    public render() {


        var { tabs, activeTabIndex, currentSlide } = this.state;
        var activeTab = tabs[activeTabIndex];

        var tabItems = $.map(tabs, (tab, index) => {

            var className = "tab " + (index == activeTabIndex ? "-active" : "");

            return <div key={index} className={className} onClick={() => this.onTabClick(index)}>
                {tab.name}
            </div>


        });

        var createItem = (content: Content): any => {

            if (typeof content === "undefined")
                return <div className="item"></div>;

            return <a className="item" href="#">
                <div className="item__image-container">
                    <img src={content.img} />
                </div>
                <div className="item__label">
                    {content.name}
                </div>
            </a>

        }

        var leftNavClass = "carousel__nav -left";
        var rightNavClass = "carousel__nav -right";

        if (currentSlide > 0)
            leftNavClass += " -active";

        if (currentSlide < this.getNumberOfSlides() - this.numberOfSlidesToShow)
            rightNavClass += " -active";

        var createColumns = (content: Content[]): any => {

            var toReturn: any[] = [];

            for (var i = 0; i < content.length; i = i + 2) {

                toReturn.push(

                    <div key={i} className="slick-carousel__column">
                        <div className="slick-carousel__column-margin">
                            {createItem(content[i])}
                            {createItem(content[i + 1])}
                        </div>
                    </div>

                )

            }

            return toReturn;

        }

        return <>
            <div className="tabs">
                {tabItems}
            </div>
            <div className="margin">
                <div className="carousel">
                    <div className={leftNavClass} onClick={() => this.onNavClick("prev")}>
                        <img src="/images/left-arrow.fw.png" />
                    </div>
                    <div className="carousel__main">
                        <Slider ref={slider => (this.slider = slider)} className="slick-carousel left-align-slick" {...this.slickSettings}>
                            {createColumns(activeTab.content)}
                        </Slider>
                        {/*<div className="slick-carousel">
                            
                        </div>*/}
                    </div>
                    <div className={rightNavClass} onClick={() => this.onNavClick("next")}>
                        <img src="/images/right-arrow.fw.png" />
                    </div>
                </div>
            </div>


        </>;

    }

    private onNavClick(direction: string) {

        var { currentSlide } = this.state;

        if (direction == "next") {

            this.slider.slickGoTo(currentSlide + 1);

        } else if (direction == "prev") {

            this.slider.slickGoTo(currentSlide - 1);

        }

    }

    private onTabClick(index: number) {

        console.log(index);

        this.setState({

            ...this.state,
            activeTabIndex: index,
            currentSlide: 0

        }, () => {

            this.slider.slickGoTo(0, true);

        })

    }

}