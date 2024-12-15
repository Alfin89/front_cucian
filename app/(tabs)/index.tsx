import { Image, ImageBackground, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Bagian Header */}
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require('@/assets/images/banner.jpg')}
          style={styles.header}
          imageStyle={styles.headerImage}
        >
          <View style={styles.headerOverlay}>
            <ThemedText type="title" style={styles.headerText}>
              30% OFF on Your First Order!
            </ThemedText>
          </View>
        </ImageBackground>
      </View>

      {/* Kartu Order Now */}
      <TouchableOpacity style={styles.orderNowButton}>
        <ThemedText style={styles.orderNowButtonText}>Order Now</ThemedText>
      </TouchableOpacity>

      {/* Bagian Services */}
      <View style={styles.services}>
        <ServiceItem title="Wash" icon={require('@/assets/images/icon/wash.png')} />
        <ServiceItem title="Iron" icon={require('@/assets/images/icon/iron.png')} />
        <ServiceItem title="Dry Clean" icon={require('@/assets/images/icon/dryclean.png')} />
        <ServiceItem title="Express" icon={require('@/assets/images/icon/express.png')} />
      </View>

      {/* Bagian Latest Orders */}
      <View style={styles.latestOrders}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Latest Orders</ThemedText>
        <OrderCard
          orderId="#1234"
          service="Regular Wash + Iron"
          status="Completed"
          time="2 hours ago"
          price="$24.99"
        />
        <OrderCard
          orderId="#1233"
          service="Dry Cleaning"
          status="In Progress"
          time="Yesterday"
          price="$35.50"
        />
      </View>

      {/* Bagian Promo di Footer */}
      <View style={styles.promo}>
        <ThemedText type="defaultSemiBold" style={styles.promoText}>
          Don't miss out on our exclusive offers!
        </ThemedText>
      </View>
    </ScrollView>
  );
}

function ServiceItem({ title, icon }) {
  return (
    <View style={styles.serviceItem}>
      <ThemedView style={[styles.serviceCard, styles.shadow]}>
        <Image source={icon} style={styles.serviceIcon} />
      </ThemedView>
      <ThemedText style={styles.serviceText}>{title}</ThemedText>
    </View>
  );
}

function OrderCard({ orderId, service, status, time, price }) {
  const statusStyle = status === "Completed" ? styles.statusCompleted : styles.statusInProgress;
  return (
    <ThemedView style={[styles.orderCard, styles.shadow]}>
      <ThemedText style={styles.orderText}>{orderId}</ThemedText>
      <ThemedText style={styles.orderText}>{service}</ThemedText>
      <ThemedText style={[styles.orderText, statusStyle]}>{status}</ThemedText>
      <ThemedText style={styles.orderText}>{time}</ThemedText>
      <ThemedText style={styles.orderText}>{price}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfa',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  headerContainer: {
    width: '100%',
    borderRadius: 16, 
    overflow: 'hidden', 
    marginBottom: 10,
  },
  header: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerImage: {
    resizeMode: 'cover',
  },
  headerOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 16,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  orderNowButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16, 
    alignItems: 'center', 
    marginVertical: 16, 
  },
  orderNowButtonText: {
    fontSize: 16,
    color: '#ffffff', 
    fontWeight: 'bold',
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  serviceItem: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  serviceCard: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
  },
  serviceIcon: {
    width: 48,
    height: 48,
  },
  serviceText: {
    fontSize: 11,
    color: '#333333',
  },
  latestOrders: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
    fontSize: 18,
    color: '#555555',
  },
  orderCard: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 8,
  },
  orderText: {
    fontSize: 14,
    color: '#333333',
  },
  statusCompleted: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  statusInProgress: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  promo: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#d1f5d3',
    borderRadius: 8,
  },
  promoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2b7a0b',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});
