import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import { CardSection, Card } from './common';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class ListItem extends Component {

    
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection >
            );
        }
    }
    
    render() {
        const { id, title } = this.props.library;
        const { titleStyle } = styles;
        return (
            <Card>
                <TouchableWithoutFeedback
                    onPress={() => this.props.selectLibrary(id)}
                >
                    <View>
                        <CardSection>
                            <Text style={titleStyle}>{title}</Text>
                        </CardSection>
                        {this.renderDescription()}
                    </View>
                </TouchableWithoutFeedback>
            </Card>
        );
    }

}
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15

    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, ActionCreators)(ListItem);
