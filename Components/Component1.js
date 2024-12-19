import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { Button } from "react-native-elements";

export default class Component1 extends Component {
  constructor() {
    super();
    this.state = {
      low: 0,
      mid: 50,
      high: 100,
      guessesLeft: 6,
      numbRangeMin: 0,
      numbRangeMax: 99,
      maxGuesses: 6,
    };
  }
  render() {
    return (
      <View>
        <View style={styles.smallTextContainer}>
          <Text style={styles.SmallerText}>
            I will read your mind in {this.state.maxGuesses} guesses or less.
          </Text>
          <Text style={styles.SmallerText}>
            Guess a number between {this.state.numbRangeMin}-
            {this.state.numbRangeMax}
            {"\n"}
          </Text>
        </View>

        <Text style={styles.biggerText}>Is your number {this.state.mid}</Text>

        <View style={styles.answerButtons}>
          <Button
            title="No, it's smaller"
            color="#fc2c2c"
            onPress={this.isSmaller}
          />
          <Button
            title="NO, it's bigger"
            onPress={this.isBigger}
            color="#fc2c2c"
          />
        </View>
        <View style={styles.yesBtn}>
          <Button title="Yes" onPress={this.userWon} color="#00b100" />
        </View>
        <Text style={styles.SmallerText}>
          {"\n"}Guesses left before you win: {this.state.guessesLeft}
          {"\n"}
        </Text>
        <View style={styles.refreshBtn}>
          <Button title="Restart 0-99" onPress={this.refreshLow} />
          <Button title="Restart 1-1000" onPress={this.refreshHigh} />
        </View>
      </View>
    );
  }

  userWon = () => {
    alert("I win! I told you I could gues your number in 6 tries, or less.");
  };

  isSmaller = () => {
    if (this.state.guessesLeft == 0) {
      alert("You, must have cheated.");
    } else {
      this.setState((state) => ({
        high: state.mid,
      }));
      this.setState((state) => ({
        mid: parseInt((state.high + state.low) / 2),
        guessesLeft: state.guessesLeft - 1,
      }));
    }
  };

  isBigger = () => {
    if (this.state.guessesLeft == 0) {
      alert("I think you cheated...");
    } else {
      this.setState((state) => ({
        low: state.mid,
      }));
      this.setState((state) => ({
        mid: parseInt((state.high + state.low) / 2),
        guessesLeft: state.guessesLeft - 1,
      }));
    }
  };

  refreshLow = () => {
    this.setState({
      low: 0,
      mid: 50,
      high: 100,
      guessesLeft: 6,
      numbRangeMin: 0,
      numbRangeMax: 99,
      maxGuesses: 6,
    });
  };

  refreshHigh = () => {
    this.setState({
      low: 1,
      mid: 500,
      high: 1000,
      guessesLeft: 10,
      numbRangeMin: 1,
      numbRangeMax: 1000,
      maxGuesses: 10,
    });
  };
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "green",
  },
  answerButtons: {
    flexDirection: "row",
    // margin: 15,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-around",
  },
  biggerText: {
    fontSize: 30,
    marginBottom: 15,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  smallTextContainer: {
    marginBottom: 25,
  },
  SmallerText: {
    fontSize: 17,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  yesBtn: {
    margin: 15,
    width: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 150,
  },
  refreshBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginLeft: "auto",
    // marginRight: "auto",
    marginTop: 20,
    // padding: 15,
    // width: 150,
  },
});
