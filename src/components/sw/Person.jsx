import PropTypes from 'prop-types';

export const Person = (props) => {
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
    } = props;

    return (
        <div>
            <h2 className="text-xl font-semibold text-blue-500">{name}</h2>
            <ul className="capitalize">
                <li>
                    <span className="font-medium">Height:</span>{' '}
                    {isNaN(parseFloat(height))
                        ? 'N/A'
                        : parseFloat(height) / 100 < 1
                          ? `${parseFloat(height)}cm`
                          : `${(parseFloat(height) / 100).toFixed(2)}m`}
                </li>
                <li>
                    <span className="font-medium">Mass:</span>{' '}
                    {isNaN(parseFloat(mass)) ? 'N/A' : `${parseFloat(mass)}kg`}
                </li>
                <li>
                    <span className="font-medium">Hair Color:</span>{' '}
                    {hair_color}
                </li>
                <li>
                    <span className="font-medium">Skin:</span> {skin_color}
                </li>
                <li>
                    <span className="font-medium">Eye Color:</span> {eye_color}
                </li>
                <li>
                    <span className="font-medium">Birth Year:</span>{' '}
                    {birth_year}
                </li>
                <li>
                    <span className="font-medium">Gender:</span> {gender}
                </li>
            </ul>
        </div>
    );
};

Person.propTypes = {
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
};
