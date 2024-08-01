import PropTypes from 'prop-types';

export const Specie = (props) => {
    const {
        name,
        classification,
        designation,
        average_height,
        skin_colors,
        hair_colors,
        eye_colors,
        average_lifespan,
        language,
    } = props;

    return (
        <div>
            <h2 className="text-xl font-semibold text-blue-500">{name}</h2>
            <ul className="capitalize">
                <li>
                    <span className="font-medium">Classification:</span>{' '}
                    {classification}
                </li>
                <li>
                    <span className="font-medium">Designation:</span>{' '}
                    {designation}
                </li>
                <li>
                    <span className="font-medium">Average Height:</span>{' '}
                    {isNaN(parseFloat(average_height))
                        ? 'N/A'
                        : parseFloat(average_height) / 100 < 1
                          ? `${parseFloat(average_height)}cm`
                          : `${(parseFloat(average_height) / 100).toFixed(2)}m`}
                </li>
                <li>
                    <span className="font-medium">Skin Colors:</span>{' '}
                    {skin_colors}
                </li>
                <li>
                    <span className="font-medium">Hair Colors:</span>{' '}
                    {hair_colors}
                </li>
                <li>
                    <span className="font-medium">Eye Colors:</span>{' '}
                    {eye_colors}
                </li>
                <li>
                    <span className="font-medium">Average Lifespan:</span>{' '}
                    {average_lifespan} years
                </li>
                <li>
                    <span className="font-medium">Language:</span> {language}
                </li>
            </ul>
        </div>
    );
};

Specie.propTypes = {
    name: PropTypes.string.isRequired,
    classification: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    average_height: PropTypes.string.isRequired,
    skin_colors: PropTypes.string.isRequired,
    hair_colors: PropTypes.string.isRequired,
    eye_colors: PropTypes.string.isRequired,
    average_lifespan: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
};
