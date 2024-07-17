const { default: Badge } = require("./Badge");

function BandgeRow (props) {
    const size = ['small', 'medium', 'large'];

    return(
        <div className="flex gap-6 items-center">
            {
                size.map((size) => (
                    <Badge role={props.role} size={size} key={`${props.role}-${size}`}>

                    </Badge>

                ))
            }
        </div>
    )
}

function BadgeSection() {
    const role = ['neutral', 'error', 'warning', 'success', 'brand'];
    return (
        <div className="flex flex-col w-[240px] gap-6">
            {
                role.map((role) => (
                    <BandgeRow role={role} key={role}/>
                ))
            }
        </div>
    )
}

export default BadgeSection;