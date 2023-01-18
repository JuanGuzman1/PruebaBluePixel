import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4040ff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  divider: {
    marginTop: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignSelf: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 0.3,
  },
  textDiv: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 10,
    fontWeight: '600',
  },
  socialContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default styles;
