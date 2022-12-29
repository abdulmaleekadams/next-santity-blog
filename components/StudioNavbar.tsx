import Link from "next/link";
import {RiArrowGoBackLine} from 'react-icons/ri'

const StudioNavbar = (props: any) => {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href="/" className="text-[#F7AB0A] flex items-center">
                    <RiArrowGoBackLine className="h-6 w-6 mr-2" />
                    Go to Website
                </Link>
            </div>
            <>
            {props.renderDefault(props)}
            </>
        </div>
    )
}
export default StudioNavbar 