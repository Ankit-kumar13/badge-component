function Badge(props) {

    const colors = {
        neutral: 'text-neutral-600 bg-gray-50 border-neutral-200',
        error: 'text-red-600 bg-red-50 border-red-200',
        warning: 'text-amber-700 bg-amber-50 border-amber-200',
        success: 'text-green-700 bg-green-50 border-green-200',
        brand: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    };

    const size = {
        small: 'text-xs px-1.5 py-0.5',
        medium: 'text-sm px-2 py-0.5',
        large: 'text-sm px-2.5 py-1',
    };

    const baseClasses = 'border rounded-full';

    const colorClass = colors[props.role];
    const sizeClass = size[props.size];

    return (
        <span className={`${colorClass} ${sizeClass} ${baseClasses}`}>
            Label
        </span>
    );
}

export default Badge;